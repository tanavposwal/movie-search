

export default function MovieInfo(props: any) {
	
    function htm() {
		let h: any = Math.floor(parseInt(props.db['Runtime']) / 60);
		let m: any = parseInt(props.db['Runtime']) % 60;
		h = h < 10 ? '0' + h : h;
		m = m < 10 ? '0' + m : m;
		return h + ':' + m;
	}

	return (
		<div className="bg-gray-800 flex  rounded-lg px-5 py-10 text-white  gap-8 items-center justify-center shadow-2xl">
            <div className="flex flex-col mx-8">
			<h1 className="text-7xl italic font-bold">{props.db['Title']}</h1>
			<img className="mt-5 rounded-lg h-72 object-cover shadow-xl" src={props.db['Poster']} />
            </div>
            <ul className="max-w-md list-disc text-gray-400">
			<li>{'Duration: ' + htm() + ' hr'}</li>
			<li>{'Rating: ' + props.db['imdbRating'] + "/10" }</li>
			<li>{'Upvotes: ' + props.db['imdbVotes']}</li>
			<li>{'Genre: ' + props.db['Genre']}</li>
			<li>{'Release date: ' + props.db['Released']}</li>
			<li>{'Languages: ' + props.db['Language']}</li>
			<li>{'BoxOffice collection ' + props.db['BoxOffice']}</li>
			<li>
				{props.db['Awards'] !== 'N/A'
					? `Award: ${props.db['Awards']}`
					: 'no awards won as per records'}
			</li>
			<li>{'Origin: ' + props.db['Country']}</li>
            </ul>
		</div>
	);
}

