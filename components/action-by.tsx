const ActionBy = (props) => {
  const { type, user } = props;

  return (
    <div className="flex items-center">
      <span className="block w-16 text-sm text-grayDefault font-sfpro">{type}</span>
      <img
        src={user.profile_img_url}
        className="w-10 h-10 border border-grayDefault rounded-full mx-2"
        alt={user.user?.username}
      />
      <span className="text-sm text-grayDefault font-sfpro">{user.user?.username}</span>
    </div>
  );
};

export default ActionBy;
