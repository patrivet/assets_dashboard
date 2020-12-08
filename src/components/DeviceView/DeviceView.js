import { useContext } from 'react';
import './DeviceView.css';

// Custom Components and context
import { AppContext } from '../Dashboard/Dashboard';
import GraphCPU from '../GraphCPU/GraphCPU';
import GraphMemory from '../GraphMemory/GraphMemory';
import ProgramsTable from '../ProgramsTable/ProgramsTable';

const DeviceView = () => {
  const { selectedDevice } = useContext(AppContext);

  return (
    <div className="deviceView">
      <h4 className="deviceView__header">
        {selectedDevice.name} ({selectedDevice.ipAddress})
      </h4>
      <GraphCPU />
      <GraphMemory />
      <ProgramsTable />
    </div>
  );
};

export default DeviceView;
