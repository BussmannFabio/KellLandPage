import fullDocument from '../index.html?raw';

const bodyMarkup = fullDocument.split('<body>')[1]?.split('</body>')[0] ?? '';

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: bodyMarkup }} />;
}
