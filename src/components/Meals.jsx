import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
const requestConfig = {};
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Loading...</p>;
  }
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />; // Display error message if request fails.  // Replace 'http://localhost:3000/meals' with your actual API endpoint.  // Adjust the error message as needed.  // Remember to import 'useHttp' and 'MealItem' components.  // 'useHttp' hook is used to fetch data from an API.  // 'MealItem' component is a reusable component that displays a meal item.  // Replace 'id', 'title', 'description', 'price' with your actual API response properties.  // Adjust the 'MealItem' component as needed.  // Replace the 'loadedMeals' variable with the actual data received from the API.  // Remember to import 'MealItem' component.  // 'MealItem' component is a reusable component that displays a meal item.  // Replace 'id', 'title
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
