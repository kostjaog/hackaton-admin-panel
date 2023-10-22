import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CommentIcon from '@material-ui/icons/Comment';
import SettingsIcon from '@material-ui/icons/Settings';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import { useRouter } from 'next/router';

export const MainListItems: React.FC = () => {
	const router = useRouter();
	return (
		<div>
			<ListItem button onClick={() => router.push('/admin/models/Company')}>
				<ListItemIcon>
					<PersonIcon />
				</ListItemIcon>
				<ListItemText primary="Company" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/Contact')}>
				<ListItemIcon>
					<ForumIcon />
				</ListItemIcon>
				<ListItemText primary="Contact" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/Event')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="Event" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/Post')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="Post" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/PlatformConfig')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="PlatformConfig" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/Project')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="Project" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/ProjectMetrics')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="ProjectMetrics" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/User')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="User" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/Worker')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="Worker" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/Media')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="Media" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/MessagerGroup')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="MessagerGroup" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/Message')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="Message" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/Moderation')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="Moderation" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/Notification')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="Notification" />
			</ListItem>

			<ListItem button onClick={() => router.push('/admin/models/Email')}>
				<ListItemIcon>
					<CommentIcon />
				</ListItemIcon>
				<ListItemText primary="Email" />
			</ListItem>
		</div>
	);
};
