import { registerPlugin } from '@capacitor/core';

export interface ICloudPlugin {
  set(options: { key: string; value: string }): Promise<{ success: boolean }>;
  get(options: { key: string }): Promise<{ value: string }>;
  sync(): Promise<{ success: boolean }>;
}

const ICloud = registerPlugin<ICloudPlugin>('ICloud');

export default ICloud;
