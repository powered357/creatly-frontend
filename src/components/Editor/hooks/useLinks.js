import isUrl from 'is-url';
import { Editor, Element, Transforms, Range } from 'slate';

export const useLinks = () => {
  const isLinkActive = (editor) => {
    const nodes = Editor.nodes(editor, {
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'link',
    });

    return !!nodes.next().value;
  };

  const unwrapLink = (editor) => {
    Transforms.unwrapNodes(editor, {
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'link',
    });
  };

  const wrapLink = (editor, url) => {
    if (isLinkActive(editor)) {
      unwrapLink(editor);
    }

    const { selection } = editor;
    const isCollapsed = selection && Range.isCollapsed(selection);
    const link = {
      type: 'link',
      url,
      children: isCollapsed ? [{ text: url }] : [],
    };

    if (isCollapsed) {
      Transforms.insertNodes(editor, link);
    } else {
      Transforms.wrapNodes(editor, link, { split: true });
      Transforms.collapse(editor, { edge: 'end' });
    }
  };

  const withLinks = (editor) => {
    const { insertData, insertText, isInline } = editor;

    editor.isInline = (element) => (element.type === 'link' ? true : isInline(element));

    editor.insertText = (text) => {
      if (text && isUrl(text)) {
        wrapLink(editor, text);
      } else {
        insertText(text);
      }
    };

    editor.insertData = (data) => {
      const text = data.getData('text/plain');

      if (text && isUrl(text)) {
        wrapLink(editor, text);
      } else {
        insertData(data);
      }
    };

    return editor;
  };

  const addLink = (editor) => ({ link }) => {
    Transforms.select(editor, editor.savedSelection);

    if (editor.selection) {
      wrapLink(editor, link);
    }
  };

  return {
    isLinkActive,
    unwrapLink,
    wrapLink,
    withLinks,
    addLink,
  };
};
