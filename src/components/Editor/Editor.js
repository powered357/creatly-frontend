import { useMemo, useState, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

import { Icon } from 'UI-KIT';

import { InputModal } from 'COMPONENTS/InputModal';

import { useEditor, useLinks, useImages } from './hooks';
import { Leaf, Element, ToolbarButton, CustomButton, CodeHighlight } from './components';
import { EditorStyled, Toolbar } from './styles/EditorStyled';

export const Editor = () => {
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);
  const [isLinkModalOpen, setLinkModalOpen] = useState(false);
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const { withLinks, addLink, isLinkActive } = useLinks();
  const { withImages, addImage } = useImages();
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withImages(withLinks(withHistory(withReact(createEditor())))), []);
  const { handleKeyDown } = useEditor(editor);

  const openLinkModal = useCallback(() => {
    setLinkModalOpen(true);
  }, []);

  const closeLinkModal = useCallback(() => {
    setLinkModalOpen(false);
  }, []);

  const openImageModal = useCallback(() => {
    setImageModalOpen(true);
  }, []);

  const closeImageModal = useCallback(() => {
    setImageModalOpen(false);
  }, []);

  const saveSelection = () => {
    editor.savedSelection = editor.selection;
  };

  return (
    <>
      <EditorStyled>
        <Slate editor={editor} value={value} onChange={setValue}>
          <Toolbar>
            <ToolbarButton format="bold" isMark>
              <Icon name="format_bold" />
            </ToolbarButton>
            <ToolbarButton format="italic" isMark>
              <Icon name="format_italic" />
            </ToolbarButton>
            <ToolbarButton format="underline" isMark>
              <Icon name="format_underline" />
            </ToolbarButton>
            <ToolbarButton format="code" isMark>
              <Icon name="code" />
            </ToolbarButton>
            <CustomButton onClick={openLinkModal} isActive={isLinkActive}>
              <Icon name="link" />
            </CustomButton>
            <CustomButton onClick={openImageModal}>
              <Icon name="image" />
            </CustomButton>
            <ToolbarButton format="heading-one">
              <Icon name="looks_one" />
            </ToolbarButton>
            <ToolbarButton format="heading-two">
              <Icon name="looks_two" />
            </ToolbarButton>
            <ToolbarButton format="block-quote">
              <Icon name="format_quote" />
            </ToolbarButton>
            <ToolbarButton format="numbered-list">
              <Icon name="format_list_numbered" />
            </ToolbarButton>
            <ToolbarButton format="bulleted-list">
              <Icon name="format_list_bulleted" />
            </ToolbarButton>
          </Toolbar>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={handleKeyDown}
            onBlur={saveSelection}
            placeholder="Start typing…"
            spellCheck
            autoFocus
          />
          <InputModal
            name="link"
            placeholder="Ссылка"
            onSubmit={addLink(editor)}
            isOpen={isLinkModalOpen}
            closeModal={closeLinkModal}
          />
          <InputModal
            name="image"
            placeholder="Ссылка на картинку"
            onSubmit={addImage(editor)}
            isOpen={isImageModalOpen}
            closeModal={closeImageModal}
          />
        </Slate>
      </EditorStyled>
      <CodeHighlight>{`
        package main 

        import "fmt"  

        func main() {
          fmt.Println('hello world')
        }
      `}</CodeHighlight>
    </>
  );
};
