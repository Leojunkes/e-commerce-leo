const INITIAL_STATE = [
    {
        name: 'Audi',
        url:"https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: 'Amarok',
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUKjtBLm62pcIPVBLDOQ-b3jC_XBeUhz0dg&usqp=CAU"    
    },
    {
        name: 'Toyota Sw4',
        url:'https://images.pexels.com/photos/1149056/pexels-photo-1149056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name:"Altos Carro",
        url:'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
];
export default function reducer(state = INITIAL_STATE, action){
    if(action.type === 'ADD_CAR'){
        return [...state, action.payload];
}
return state;
}

export function addCar(car){
    return {
        type:'ADD_CAR', 
        payload:car
    };
};