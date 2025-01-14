import './Proyecto.css';

const Proyecto = ({ img, name, subtitle, info, linkGit, onOpenGallery }) => {
    
    return (
        <div className="projcard projcard-blue">
            <div className="projcard-innerbox">
                <img className="projcard-img" src={img} alt={name} />
                <div className="projcard-textbox">
                    <div className="projcard-title">{name}</div>
                    <div className="projcard-subtitle">{subtitle}</div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">{info}</div>

                    <button className="projcard-button" onClick={() => window.open(linkGit, '_blank')}>GitHub</button>
                    <button className="projcard-button" onClick={onOpenGallery}>Imágenes</button>
                </div>
            </div>
        </div>
    );
};

export default Proyecto;