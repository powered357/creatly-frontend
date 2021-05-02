import { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

import { ModalInput } from 'COMPONENTS/ModalInput';

import { useEditor, useLinks, useImages } from './hooks';
import { Leaf, Element, ToolbarButton, CustomButton } from './components';
import { EditorStyled, Toolbar } from './styles/EditorStyled';

export const Editor = ({ value, onChange }) => {
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
        <Slate editor={editor} value={value} onChange={onChange}>
          <Toolbar>
            <ToolbarButton format="bold" icon="format_bold" isMark />
            <ToolbarButton format="italic" icon="format_italic" isMark />
            <ToolbarButton format="underline" icon="format_underline" isMark />
            <ToolbarButton format="code" icon="code" />
            <CustomButton onClick={openLinkModal} icon="link" isActive={isLinkActive} />
            <CustomButton onClick={openImageModal} icon="image" />
            <ToolbarButton format="heading-one" icon="looks_one" />
            <ToolbarButton format="heading-two" icon="looks_two" />
            <ToolbarButton format="block-quote" icon="format_quote" />
            <ToolbarButton format="numbered-list" icon="format_list_numbered" />
            <ToolbarButton format="bulleted-list" icon="format_list_bulleted" />
          </Toolbar>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={handleKeyDown}
            onBlur={saveSelection}
            placeholder="Введите контент урока"
            spellCheck
          />
          <ModalInput
            name="link"
            placeholder="Ссылка"
            onSubmit={addLink(editor)}
            isOpen={isLinkModalOpen}
            closeModal={closeLinkModal}
          />
          <ModalInput
            name="image"
            placeholder="Ссылка на картинку"
            onSubmit={addImage(editor)}
            isOpen={isImageModalOpen}
            closeModal={closeImageModal}
          />
        </Slate>
      </EditorStyled>
      {/* <CodeHighlight>{`
        package main 

        import "fmt"  

        func main() {
          fmt.Println('hello world')
        }
      `}</CodeHighlight> */}
    </>
  );
};

Editor.propTypes = {
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
