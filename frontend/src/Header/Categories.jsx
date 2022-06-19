import styled from "styled-components";
import { categories,categories1 } from "./data";
import { mobile } from "./responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {
  return (
    <div>
    <div className="row" style={{marginTop:"1rem"}}>
    <div className="col-sm-12">
        <div className="headline text-center mb-5">
            <h2 className="pb-3 position-static d-inline-block">CATEGORIES</h2>
        </div>
    </div>
</div>
    <Container>
    

      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
</Container>

<Container>
      {categories1.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
      
      
    </Container>
    </div>
  );
};

export default Categories;