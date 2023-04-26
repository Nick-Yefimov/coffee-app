import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={220}
    height={260}
    viewBox="0 0 300 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="20" y="6" rx="8" ry="8" width="420" height="360"/>
  </ContentLoader>
)

export default Skeleton;