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

export async function homePagePostsQuery() {
	const response = await fetch('https://www.mariolafuente-admin.sitecr.com/graphqlmlm', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: `query NewQuery {
        pageBy(pageId: 13) {
          id
          acf_index {
            skillsTitle
            seoTitle
            seoDescription
            contactMe
            aboutText
            aboutTecnologiesItems
            aboutImg {
              altText
              sourceUrl
              srcSet
            }
            contactMeImg {
              altText
              sourceUrl
              srcSet
            }
            skills {
              skillColor
              skillName
              skillPorcentage
            }
            gallerySection {
              galleryTitle
              workGalleryImgs {
                altText
                srcSet
              }
            }
          }
        }
      }
      `,
		}),
	});

	const { data } = await response.json();
	return data;
}
