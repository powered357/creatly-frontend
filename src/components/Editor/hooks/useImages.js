import isUrl from 'is-url';
import { Transforms } from 'slate';

import { EXTENSIONS } from 'CONSTANTS/extensions';

export const useImages = () => {
  const isImageUrl = (url) => {
    if (!url || !isUrl(url)) return false;
    const ext = new URL(url).pathname.split('.').pop();

    return EXTENSIONS.IMAGE.includes(ext);
  };

  const insertImage = (editor, url) => {
    const text = { text: '' };
    const image = { type: 'image', url, children: [text] };

    Transforms.select(editor, editor.savedSelection);
    Transforms.insertNodes(editor, image);
  };

  const withImages = (editor) => {
    const { insertData, isVoid } = editor;

    editor.isVoid = (element) => (element.type === 'image' ? true : isVoid(element));

    editor.insertData = (data) => {
      const text = data.getData('text/plain');
      const { files } = data;

      if (files?.length > 0) {
        const keys = Object.keys(files);

        for (let i = 0; i < keys.length; i++) {
          const reader = new FileReader();
          const [mime] = file.type.split('/');

          if (mime === 'image') {
            reader.addEventListener('load', () => {
              const url = reader.result;

              insertImage(editor, url);
            });

            reader.readAsDataURL(file);
          }
        }
      } else if (isImageUrl(text)) {
        insertImage(editor, text);
      } else {
        insertData(data);
      }
    };

    return editor;
  };

  const addImage = (editor) => ({ image }) => {
    insertImage(editor, image);
  };

  return {
    isImageUrl,
    insertImage,
    withImages,
    addImage,
  };
};
