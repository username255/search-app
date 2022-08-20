import { IProcedure } from '../interfaces/procedure';
import { Procedure } from './procedure';

const procedureMock: IProcedure = {
  term: 'Foot inversion',
  active: true,
  languageCode: 'en',
  module: '900000000000207008',
  concept: {
    conceptId: '13130004',
    active: true,
    definitionStatus: 'PRIMITIVE',
    moduleId: '900000000000207008',
    fsn: {
      term: 'Foot inversion, function (observable entity)',
      lang: 'en'
    },
    pt: {
      term: 'Foot inversion',
      lang: 'en'
    },
    id: '13130004'
  }
};

describe('Procedure', () => {
  it('should create an instance', () => {
    expect(new Procedure(null as any)).toBeTruthy();
  });

  it('should not have null values if provided with no data', () => {
    const procedure: Procedure = new Procedure(null as any);
    expect(procedure.id).toEqual(null);
    expect(procedure.active).toEqual(null);
    expect(procedure.name).toEqual(null);
  });

  it('should propagate values if provided with the right data', () => {
    const procedure: Procedure = new Procedure(procedureMock);
    expect(procedure.id).toEqual(procedureMock.concept.id);
    expect(procedure.active).toEqual(procedureMock.concept.active);
    expect(procedure.name).toEqual(procedureMock.concept.fsn.term);
  });
});
