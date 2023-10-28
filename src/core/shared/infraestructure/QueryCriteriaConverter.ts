import { Criteria } from "../domain/criteria/Criteria";

export interface QueryCriteriaConverter<T> {
    convert(criteria: Criteria): T;
}
