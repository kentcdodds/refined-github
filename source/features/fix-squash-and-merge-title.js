import select from 'select-dom';

export default function () {
	// CUSTOM: I don't want to change the squash and merge commit message.
	// I want it to be what I set it to be :)
	return;
	const btn = select('.merge-message .btn-group-squash [type=submit]');
	if (!btn) {
		return;
	}
	btn.addEventListener('click', () => {
		const title = select('.js-issue-title').textContent;
		const number = select('.gh-header-number').textContent;
		select('#merge_title_field').value = `${title.trim()} (${number})`;
	});
}
