import React from 'react';
import AllocatedQuantityResults from './AllocatedQuantityResults';
import OptionsQuantitySelect from './OptionsQuantitySelect';

const AllocatedQuantityFields = ({ paperType, paperSources }) =>
  <div>
    <h5>{paperType.name}</h5>
    <OptionsQuantitySelect
      label="Paper Source"
      buttonLabel="Add Source"
      options={paperSources.map(source => {
        return {name: source.supplierName, id: source.supplierID};
      })}/>
    <AllocatedQuantityResults required={paperType.required} allocated={paperType.allocated} />
  </div>

export default AllocatedQuantityFields;
