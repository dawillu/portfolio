interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, title }) => {
  return (
    <div className="images-container">
      {images.map((image, index) => (
        <div className="images" key={index}>
          <img src={image} alt={`${title} preview ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
