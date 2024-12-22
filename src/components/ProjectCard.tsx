interface Props {
	image: string
	title: string
	description: string
	link: string
}

const ProjectCard2 = ({
	image,
	title,
	description,
	link,
}: Props) => {
	return (
		<article class="flex flex-col gap-3 max-w-80 h-72 transition-all">
		<picture
			class={`relative h-44 w-80 group/picture cursor-pointer transition-all hover:scale-105 hover:shadow-md rounded-xl`}
		>
			<a href={link} target="_blank">
				<div class={`absolute overflow-hidden rounded-xl`}>
					{/* <h3
						class={`font-bold text-3xl transition-all absolute text-white opacity-95 z-10 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 group-hover/picture:opacity-0`}
					>
						{name}
					</h3> */}
					<div
						style={{
							clipPath: "polygon(0 0, 0 100%, 100% 0)",
						}}
						class={`h-44 w-80 group-hover/picture:-translate-y-28 group-hover/picture:-translate-x-28 group-hover/picture:-translate-full absolute opacity-90 rounded-xl transition-all`}
					/>
					<div
						style={{
							clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
						}}
						class={`h-44 w-80 group-hover/picture:translate-y-28 group-hover/picture:translate-x-28 opacity-80 rounded-xl transition-all`}
					/>
				</div>
				<img src={image} alt={title} class="h-44 w-80 rounded-xl" />
			</a>
		</picture>
		<div>
			<h3 class="font-bold text-[#0D141C]">{title}</h3>
			<p class="text-[#4F7396] text-sm text-wrap">{description}</p>
		</div>
	</article>
	)
}

export default ProjectCard2
