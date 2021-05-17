import isHotkey from 'is-hotkey';
import { Editor, Element, Transforms } from 'slate';

import { HOTKEYS, LIST_TYPES } from 'CONSTANTS/editor';

export const useEditor = (editor) => {
  const isBlockActive = (format) => {
    const nodes = Editor.nodes(editor, {
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    });

    return !!nodes.next().value;
  };

  const isMarkActive = (format) => {
    const marks = Editor.marks(editor);

    return marks ? marks[format] === true : false;
  };

  const toggleBlock = (format) => {
    const isActive = isBlockActive(format);
    const isList = LIST_TYPES.includes(format);
    const isCode = format === 'code';

    Transforms.unwrapNodes(editor, {
      match: (n) => LIST_TYPES.includes(!Editor.isEditor(n) && Element.isElement(n) && n.type),
      split: true,
    });

    Transforms.unwrapNodes(editor, {
      match: (n) => n.type === 'code',
      split: true,
    });

    const paragraph = isActive ? 'paragraph' : false;
    let childrenType = format;

    if (isList) childrenType = 'list-item';
    if (isCode) childrenType = 'code-item';

    Transforms.setNodes(editor, { type: paragraph || childrenType });

    if (!isActive && (isList || isCode)) {
      const block = { type: format, children: [] };

      Transforms.wrapNodes(editor, block);
    }
  };

  const toggleMark = (format) => {
    const isActive = isMarkActive(format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const handleKeyDown = (e) => {
    const keys = Object.keys(HOTKEYS);

    for (let i = 0; i < keys.length; i++) {
      if (isHotkey(keys[i], e)) {
        e.preventDefault();
        const mark = HOTKEYS[keys[i]];

        toggleMark(mark);
      }
    }
  };

  return {
    isBlockActive,
    isMarkActive,
    toggleBlock,
    toggleMark,
    handleKeyDown,
  };
};
