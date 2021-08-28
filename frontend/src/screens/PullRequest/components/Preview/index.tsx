import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import TagsMenu from '@root/screens/ViewPost/components/TagsMenu';
import TextRender from '@root/components/TextRenderer';
import { ITag } from '@root/screens/FeedPage/models/ITag';
import TextDiff from '@root/components/TextDiff';

// eslint-disable-next-line max-len
interface IPreviewProps {
  className?: string;
  coverImage: string;
  title: any;
  oldTitle: string;
  tags: ITag [];
  oldTags: ITag [];
  markdown: boolean;
  text: string;
  oldText: string;
  seeDiff: boolean;
}

const Preview = ({ coverImage, title, tags, markdown, text, className, oldTitle, oldTags, oldText, seeDiff }: IPreviewProps) => (
  <div className={classNames(className, styles.post_preview_container)}>
    <img className={styles.coverImage} src={coverImage ?? 'https://i.imgur.com/KVI8r34.jpg'} alt="cover" />
    <div className={styles.title}>
      <TextDiff oldText={oldTitle} newText={title} />
    </div>
    <div className={styles.btnWrapper}>
      {tags && tags.map(tag => (
        <TagsMenu
          key={tag.id}
          tag={tag.name}
        />
      ))}
    </div>
    <TextRender
      className={styles.content}
      markdown={markdown}
      content={text}
    />
  </div>
);

export default Preview;
