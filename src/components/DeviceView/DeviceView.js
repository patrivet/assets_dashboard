import './DeviceView.css';

// Custom Components
import GraphCPU from '../GraphCPU';
import GraphMemory from '../GraphMemory';
import Table from '../Table';

const DeviceView = () => {
  return (
    <div className="deviceView">
      <GraphCPU />
      <GraphMemory />
      <Table />
    </div>
  );
};

export default DeviceView;
