import Card from "@/components/Card";

const CardList = ({dataArr, tag}) => {
    return dataArr.map((el) => <Card key={el.id} info={el} tag={tag} type={"minor"} />)
};

export default CardList;