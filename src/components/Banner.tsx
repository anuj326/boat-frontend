import "./banner.css";

type BannerProps = {
  image: string;
  height?: string; // optional (ex: "400px", "60vh")
};

export default function Banner({ image, height = "60vh" }: BannerProps) {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(${image})`,
        height
      }}
    />
  );
}
