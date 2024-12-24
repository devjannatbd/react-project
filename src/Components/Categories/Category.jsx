

const Category = ({category}) => {

  const {category_name,id,img,_id}=category
  return (
    <div className="border rounded-lg p-10 bg-indigo-100">
      <div>
        <img src={img} alt="" />
        <h3 className="text-center">{category_name}</h3>
      </div>
    </div>
  );
};

export default Category;