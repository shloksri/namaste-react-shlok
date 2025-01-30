import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";
import MOCK_DATA_VEG from "../mocks/resCardMockVeg.json";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resObj={MOCK_DATA} />);
  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Veg label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardPromoted resObj={MOCK_DATA_VEG} />);
  const name = screen.getByText("VEG");
  expect(name).toBeInTheDocument();
});
