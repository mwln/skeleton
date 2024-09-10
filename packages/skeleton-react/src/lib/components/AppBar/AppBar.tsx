import React from 'react';

import { ToolbarCenterProps, AppBarHeadlineProps, ToolbarLeadProps, AppBarProps, ToolBarProps, ToolbarTrailProps } from './types.js';

// Components ---
const AppBarRoot: React.FC<AppBarProps> = ({
	// Root
	base = 'w-full flex flex-col',
	background = 'bg-surface-100-900',
	spaceY = 'space-y-4',
	border = '',
	padding = 'p-4',
	shadow = '',
	classes = '',
	// Children
	children
}) => {
	return (
		<div className={`${base} ${background} ${spaceY} ${border} ${padding} ${shadow} ${classes}`} role="toolbar" data-testid="app-bar">
			{children}
		</div>
	);
};

const Toolbar: React.FC<ToolBarProps> = ({
	// Toolbar
	base = 'flex justify-between',
	gridCols = 'grid-cols-[auto_1fr_auto]',
	gap = 'gap-4',
	classes = '',
	// Children
	children
}) => {
	return (
		<div className={`${base} ${gridCols} ${gap} ${classes}`} data-testid="app-bar-toolbar">
			{children}
		</div>
	);
};

const ToolbarLead: React.FC<ToolbarLeadProps> = ({
	// Lead
	base = 'flex',
	spaceX = 'space-x-4 rtl:space-x-reverse',
	padding = '',
	classes = '',
	// Children
	children
}) => {
	return (
		<div className={`${base} ${spaceX} ${padding} ${classes}`} data-testid="app-bar-toolbar-lead">
			{children}
		</div>
	);
};

const ToolbarCenter: React.FC<ToolbarCenterProps> = ({
	// Center
	base = 'grow',
	align = 'text-center',
	padding = '',
	classes = '',
	// Children
	children
}) => {
	return (
		<div className={`${base} ${align} ${padding} ${classes}`} data-testid="app-bar-toolbar-center">
			{children}
		</div>
	);
};

const ToolbarTrail: React.FC<ToolbarTrailProps> = ({
	// Trail
	base = 'flex',
	spaceX = 'space-x-4 rtl:space-x-reverse',
	padding = '',
	classes = '',
	// Children
	children
}) => {
	return (
		<div className={`${base} ${spaceX} ${padding} ${classes}`} data-testid="app-bar-toolbar-trail">
			{children}
		</div>
	);
};

const AppBarHeadline: React.FC<AppBarHeadlineProps> = ({
	// Headline
	base = 'w-full',
	classes = '',
	// Children
	children
}) => {
	return (
		<div className={`${base} ${classes}`} data-testid="app-bar-headline">
			{children}
		</div>
	);
};

export const AppBar = Object.assign(AppBarRoot, {
	Toolbar: Toolbar,
	ToolbarLead: ToolbarLead,
	ToolbarCenter: ToolbarCenter,
	ToolbarTrail: ToolbarTrail,
	Headline: AppBarHeadline
});