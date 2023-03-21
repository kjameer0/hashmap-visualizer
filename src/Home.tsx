import HomeIcon from 'components/HomeIcon';

export default function Home() {
  const structures = [
    { name: 'Array', src: 'src/assets/array.png', link: '/arr' },
    { name: 'Hashmap', src: 'src/assets/hashmap.png', link: '/hashmap' },
    { name: 'Binary Tree', src: 'src/assets/binary-tree.png', link: '/binary-tree' },
  ];
  return (
    <section className="container home-container">
      <h1 className="container-title">Home</h1>
      {structures.map((e, idx) => {
        return <HomeIcon name={e.name} key={idx} src={e.src} link={e.link} />;
      })}
    </section>
  );
}
