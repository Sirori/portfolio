import { useRef, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import S from './Horizon.module.css';
import pb from './../../api/pocketbase';
import { getPbImageURL } from './../../hooks/getPbImageURL';

function HorizonContents() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (evt) => {
      const { deltaY } = evt;
      const { scrollLeft, offsetWidth, scrollWidth } = scrollContainer;

      const OFFSET = 10;
      const isStart = scrollLeft === 0;
      const moveLeft = scrollLeft + offsetWidth;
      const isEnd = moveLeft >= scrollWidth - OFFSET;
      const isContinue = !isEnd && !isStart;

      const isScrollUp = deltaY < 0;
      const isScrollDown = deltaY > 0;

      if (isScrollDown || isScrollUp) {
        scrollContainer.scrollLeft += deltaY;
      }

      if (isContinue) {
        evt.preventDefault();
      }
    };

    scrollContainer?.addEventListener('wheel', handleWheel);

    return () => {
      scrollContainer?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // pb데이터 가져오기
  const [contents, setContents] = useState([]);
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setStatus('loading');

    Promise.all([pb.collection('project').getFullList()])
      .then(([project]) => {
        setContents([{ title: '프로젝트', data: project }]);
        setStatus('success');
      })
      .catch((error) => {
        setError(error);
        setStatus('error');
      });
  }, [id]);

  return (
    <section className={`horizontal ${S.horizontal}`}>
      <div className={S.verticalScrollContainer}>
        <div className={S.scrollContainer} ref={scrollContainerRef}>
          {contents?.map((contentCategory) =>
            contentCategory.data?.map((item) => (
              <div className={S.horizontalContent} key={item.id}>
                <Link to={`/detail/${item.id}`} className={S.contentItem}>
                  <img
                    className="w-full h-auto"
                    src={getPbImageURL(item, 'mainImage')}
                    alt={`${item.title} 클론코딩`}
                  />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default HorizonContents;
