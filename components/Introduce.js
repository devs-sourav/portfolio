
import HeadNav from './HeadNav';
import BannerHomeType from './BannerHomeType';
import CounterType from './CounterType';

export default function Introduce() {

  return (
    <div id='home' data-section="home" className='pb-28'  >
      <HeadNav/>
      <BannerHomeType/>
      <CounterType/>
    </div>
  );
}
