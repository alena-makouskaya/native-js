import { CityType } from "./02_02";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        buildedAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: "White street",
          },
        },
      },
      {
        buildedAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: "Happy street",
          },
        },
      },
      {
        buildedAt: 2020,
        repaired: false,
        address: {
          number: 101,
          street: {
            title: "Happy street",
          },
        },
      },
    ],
    govermentBuildings: [
        {
            type: "HOSPITAL",
            budget: 20000,
            staffCount: 1000,
            address: {
                street: {
                    title: "South Str"
                }
            }
        },
        {
            type: "FIRE-STATION",
            budget: 50000,
            staffCount: 1000,
            address: {
                street: {
                    title: "Central Str"
                }
            }
        },

    ],
    citizensNumber: 1000000,
  };
});

// 01. Создайте тип CityType
// 02. Заполните объект city, чтобы тесты ниже прошли
test("test city should contains 3 houses", () => {

expect(city.houses.length).toBe(3);


  expect(city.houses[0].buildedAt).toBe(2012);
  expect(city.houses[0].repaired).toBe(false);
  expect(city.houses[0].address.number).toBe(100);
  expect(city.houses[0].address.street.title).toBe("White street");

  expect(city.houses[1].buildedAt).toBe(2008);
  expect(city.houses[1].repaired).toBe(false);
  expect(city.houses[1].address.number).toBe(100);
  expect(city.houses[1].address.street.title).toBe("Happy street");

  expect(city.houses[2].buildedAt).toBe(2020);
  expect(city.houses[2].repaired).toBe(false);
  expect(city.houses[2].address.number).toBe(101);
  expect(city.houses[2].address.street.title).toBe("Happy street");
});

test("test city should contains hospital and fire station", () => {
    expect(city.govermentBuildings.length).toBe(3);

    expect(city.govermentBuildings[0].type).toBe("HOSPITAL");
    expect(city.govermentBuildings[0].budget).toBe(20000);
    expect(city.govermentBuildings[0].staffCount).toBe(1000);
    expect(city.govermentBuildings[0].address.street.title).toBe("South Str");

    expect(city.govermentBuildings[1].type).toBe("FIRE-STATION");
    expect(city.govermentBuildings[1].budget).toBe(50000);
    expect(city.govermentBuildings[1].staffCount).toBe(1000);
    expect(city.govermentBuildings[1].address.street.title).toBe("Central Str");
})