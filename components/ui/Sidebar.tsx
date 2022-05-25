/** @format */
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
	return (
		<Drawer anchor='left' open={true} onClose={() => console.log('cerando')}>
			<Box sx={{ width: 250 }}>
				<Box
					sx={{
						padding: '5px 10px',
					}}
				>
					<Typography variant='h4'>Menú</Typography>
				</Box>

				<List>
					{menuItems.map((text: string, index: number) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />

				<List>
					{menuItems.map((text: string, index: number) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	);
};
