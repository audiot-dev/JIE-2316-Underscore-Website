import styles from "../styles/Home.module.css"
import Switch from "@mui/material/Switch"

const label = {inputProps: {"aria-label": "Switch Demo"}}

export default function Home() {
  
	return (
		<div className={styles.container}>
			<div>
				<span>With default theme:</span>
			</div>
			<Switch {...label} defaultChecked />
			<Switch {...label} />
			<Switch {...label} disabled defaultChecked />
		</div>
	)
}