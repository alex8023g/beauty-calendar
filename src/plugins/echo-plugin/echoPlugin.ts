import { registerPlugin } from '@capacitor/core';

export interface EchoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  icloudset(options: { value: string }): Promise<{ success: boolean }>;
  icloudget(): Promise<{ value: string }>;
  icloudsync(): Promise<{ success: boolean }>;
}

const Echo = registerPlugin<EchoPlugin>('Echo');

export default Echo;
