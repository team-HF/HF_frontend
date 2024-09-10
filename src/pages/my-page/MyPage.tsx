import ProfileBox from './components/ProfileBox';
import Tab from './components/Tab';
import * as s from './styles';

export default function MyPage() {
  return (
    <s.Container>
      <ProfileBox />
      <Tab />
    </s.Container>
  );
}
