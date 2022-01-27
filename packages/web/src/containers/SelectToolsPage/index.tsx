import {images} from '../../assets';
import {Image} from '../../components/Image';
import {Footer, Page, Main} from '../../components/Layouts';

export function SelectToolsPage() {
  return (
    <Page className='SelectToolsPage'>
      <Main>
        <Image size={50} src={images.npm} />
        <Image size={50} src={images.yarn} />
      </Main>
      <Footer>hello</Footer>
    </Page>
  );
}
