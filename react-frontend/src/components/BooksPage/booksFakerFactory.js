
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
year: faker.datatype.float(),

        };
        data = [...data, fake];
    }
    return data;
};
