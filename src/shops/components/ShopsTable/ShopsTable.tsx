import { useAppDispatch, useAppSelector } from "@/store/hooks";
import "./ShopsTable.scss";
import Button from "@/shared/components/Button";
import {
  decrementEmployees,
  featureShop,
  incrementEmployees,
} from "@/shops/slice/shopsSlice";

const ShopsTable = (): React.ReactElement => {
  const shops = useAppSelector((state) => state.shops.list);
  const dispatch = useAppDispatch();

  const onFeatureShop = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = event.currentTarget.dataset.id!;

    dispatch(featureShop(Number(id)));
  };

  const onIncrementEmployees = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = event.currentTarget.dataset.id!;

    dispatch(incrementEmployees(Number(id)));
  };

  const onDecrementEmployees = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = event.currentTarget.dataset.id!;

    dispatch(decrementEmployees(Number(id)));
  };

  return (
    <table className="shops-data">
      <thead>
        <tr>
          <th className="shops-data__column--fixed">Image</th>
          <th>Name</th>
          <th>City</th>
          <th># employees</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {shops.map(({ id, name, city, employees, picture }) => (
          <tr key={id}>
            <td className="shops-data__column--fixed">
              <img src={`/pictures/${picture.thumbnail}`} alt={name} />
            </td>
            <td>{name}</td>
            <td>{city}</td>
            <td>
              {employees}{" "}
              <Button
                variant="outline"
                onClick={onDecrementEmployees}
                data-id={id}
              >
                -
              </Button>{" "}
              <Button
                variant="outline"
                onClick={onIncrementEmployees}
                data-id={id}
              >
                +
              </Button>
            </td>
            <td>
              <Button variant="outline" onClick={onFeatureShop} data-id={id}>
                feature
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShopsTable;
