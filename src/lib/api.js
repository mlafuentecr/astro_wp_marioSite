// export async function navQuery(){
//   const siteNavQueryRes = await fetch(import.meta.env.WORDPRESS_API_URL, {
//       method: 'post',
//       headers: {'Content-Type':'application/json'},
//       body: JSON.stringify({
//           query: `{
//               menus(where: {location: PRIMARY}) {
//                 nodes {
//                   name
//                   menuItems {
//                       nodes {
//                           uri
//                           url
//                           order
//                           label
//                       }
//                   }
//                 }
//               }
//               generalSettings {
//                   title
//                   url
//                   description
//               }
//           }
//           `
//       })
//   });
//   const{ data } = await siteNavQueryRes.json();
//   return data;
// }

// export async function homePagePostsQuery() {
// 	const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify({
// 			query: ` pageBy(pageId: 13) {
//           id
//           acf_index {
//             skillsTitle
//             seoTitle
//             seoDescription
//             contactMe
//             aboutText
//             aboutTecnologiesItems
//             aboutImg {
//               altText
//               srcSet
//             }
//             contactMeImg {
//               altText
//               srcSet
//             }
//             skills {
//               skillColor
//               skillName
//               skillPorcentage
//             }
//           }
//         }
//       `,
// 		}),
// 	});

// 	const json = await response.json();
// 	if (json.errors) {
// 		console.log(json.errors);
// 		throw new Error('GraphQL query failed.');
// 	}
// 	const { film } = json.data;
// }
