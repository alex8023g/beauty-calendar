import { ScreenOrientation } from '@/plugins/screen-orientation';
import { useEffect, useState } from 'react';

export function OrientationPage() {
  const [orientation, setOrientation] = useState<string>('');

  useEffect(() => {
    ScreenOrientation.addListener('screenOrientationChange', (res) =>
      setOrientation(res.type),
    );

    ScreenOrientation.orientation().then((res) => {
      console.log('🚀 ~ Icloud ~ res:', res);
      setOrientation(res.type);
    });

    return () => {
      ScreenOrientation.removeAllListeners();
    };
  }, []);

  return (
    <>
      <div>Icloud</div>
      <div>orientation: {orientation}</div>
    </>
  );
}
