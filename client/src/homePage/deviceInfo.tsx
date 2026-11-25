interface IDeviceInfoProps {
  deviceLogo: any;
  deviceName: string;
}

export const DeviceInfo = ({ deviceLogo, deviceName }: IDeviceInfoProps) => {
  return (
    <div className="device-container">
      <div className="device-info">
        <img
          src={deviceLogo}
          className="material-symbols-outlined border-1 border-[#262626] p-2 w-[44px] rounded-sm 
          laptop: w-[54px]"
        />
        <p>{deviceName}</p>
      </div>
      <div className="device-description laptop:text-[16px]">
        StreamVibe is optimized for both Android and iOS smartphones. Download our app from the
        Google Play Store or the Apple App Store
      </div>
    </div>
  );
};
