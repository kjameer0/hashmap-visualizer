import HomeIcon from 'components/HomeIcon';
import { baseUrl } from 'main';
import arrayImg from '../src/assets/array.png';
import hashImg from '../src/assets/hashmap.png';
import btreeImg from '../src/assets/binary-tree.png';
export default function Home() {
  const structures = [
    { name: 'Array', src: arrayImg, link: baseUrl + 'arr' },
    { name: 'Hashmap', src: hashImg, link: baseUrl + 'hashmap' },
    { name: 'Binary Tree', src: btreeImg, link: baseUrl + 'binary-tree' },
  ];
  return (
    <section className="container home-container">
      <h1 className="container-title">Data Structure Visualizer</h1>
      {structures.map((e, idx) => {
        return <HomeIcon name={e.name} key={idx} src={e.src} link={e.link} />;
      })}
    </section>
  );
}
