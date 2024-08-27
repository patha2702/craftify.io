interface DeviceDimensions {
  width: number;
  height: number;
}

interface DevicePresets {
  [key: string]: DeviceDimensions;
}

export const devicePresets: DevicePresets = {
  desktop: { width: 1920, height: 1080 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 667 },
};
