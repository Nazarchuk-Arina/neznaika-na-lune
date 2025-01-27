import ponchikV from "../../assets/images/Slider/ponchik-video.mp4";

const Gif = () => {
  return (
    <div style={{ width: "300px", height: "auto" }}>
      <video
        src={ponchikV}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default Gif;
