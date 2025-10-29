import { useSearchParams } from "react-router-dom";
import styles from "./map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Pos</h1>
      <p>
        lat: {lat} lng : {lng}
      </p>
      <button onClick={() => setSearchParams({ lat: 40, lng: 27 })}>
        Change pos
      </button>
    </div>
  );
}

export default Map;
