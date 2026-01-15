import { Button } from '@/components/ui/button';
import Echo from '@/plugins/echo-plugin/echoPlugin';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export function EchoPage() {
  const [icloudValue, setIcloudValue] = useState<string>('');
  return (
    <>
      <div>Icloud</div>
      <br />
      <Button
        className='mb-2'
        onClick={async () => {
          const { value } = await Echo.echo({ value: 'Hello World!' });
          console.log('Response from native:', value);
        }}
      >
        Echo
      </Button>
      <br />
      <Button
        className='mb-2'
        onClick={async () => {
          const { success } = await Echo.icloudset({ value: nanoid() });
          console.log('Response from native:', success);
        }}
      >
        iCloudSet
      </Button>
      <br />
      <Button
        className='mb-2'
        onClick={async () => {
          const { value } = await Echo.icloudget();
          setIcloudValue(value);
          console.log('Response from native:', value);
        }}
      >
        iCloudGet
      </Button>
      <br />
      <Button
        className='mb-2'
        onClick={async () => {
          const { success } = await Echo.icloudsync();
          console.log('Response from native:', success);
        }}
      >
        iCloudSync
      </Button>

      <div>IcloudValue: {icloudValue}</div>
    </>
  );
}
