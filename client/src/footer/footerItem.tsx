interface IFooterItem {
  heading: string;
  category?: string[];
  iconsLink?: string[];
}
export const FooterItem = ({ heading, category, iconsLink }: IFooterItem) => {
  return (
    <>
      <div className="col-span-3 mb-7.5" id="home">
        <h3 className="text-lg font-semibold mb-4">{heading}</h3>
        <div id="category">
          {category?.map((el) => (
            <p className="subparagraph mb-2" key={el}>
              <a href="">{el}</a>
            </p>
          ))}
        </div>
        <div id="iconLInks" className="flex gap-4">
          {iconsLink?.map((el) => (
            <a key={el} href="#">
              <img className="subparagraph" src={el} key={el} alt="logo" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
