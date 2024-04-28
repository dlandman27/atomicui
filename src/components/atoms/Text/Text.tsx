import React, { ReactNode } from 'react';

type TextTag = 'p' | 'span' | 'a' | 'b' | 'em' | 'strong' | 'small' | 'i';

interface TextProps {
  children: ReactNode;
  tag?: TextTag;
}

const Text: React.FC<TextProps> = ({ children, tag: Tag = 'span' }) => {
  return <Tag>{children}</Tag>;
};

export default Text;
