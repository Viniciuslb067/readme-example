import CallfaceLogo from 'assets/images/logo_callface.svg';
import NotificationIcon from 'assets/icons/notification-icon.svg';
import ChevronIcon from 'assets/icons/chevron-down-icon.svg';
import ProfilePic from 'assets/images/profile-pic.png';

const Header = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-brand-primary px-8">
      <img src={CallfaceLogo} alt="callface-logo" className="h-8 w-16" />
      <div className="flex items-center space-x-4">
        <img
          src={NotificationIcon}
          alt="notification-icon"
          className="h-10 cursor-pointer"
        />
        <div className="flex items-center space-x-2">
          <div className="flex size-10 items-center justify-center rounded-full border-2 border-white">
            <img
              src={ProfilePic}
              alt="profile-photo"
              className="size-full rounded-full"
            />
          </div>
          <h3 className="text-sm font-semibold text-white">Marcus Rodrigues</h3>
          <img src={ChevronIcon} alt="chevron-down-icon" className="h-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
