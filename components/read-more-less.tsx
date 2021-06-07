import ReadMore from "read-more-less-react";

const ReadMoreLess = (props) => {
  const { text, lines, className } = props;

  return (
    <div>
      <ReadMore text={text} lines={lines} readMoreText="more" readLessText="less" {...className}/>
    </div>
  );
};

export default ReadMoreLess;
