using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileManager.IServices
{
	/// <summary>
	/// IDirectoryService
	/// </summary>
	public interface IDirectoryService
	{
		/// <summary>
		/// Get Directories List
		/// </summary>
		/// <param name="path"></param>
		/// <returns></returns>
		string[] GetDirectoriesList(string path);

		/// <summary>
		/// delete Directory
		/// </summary>
		/// <param name="path"></param>
		void Delete(string path);

		/// <summary>
		/// Creates directory
		/// </summary>
		/// <param name="path"></param>
		void Create(string path);

		/// <summary>
		/// Is Directory Type
		/// </summary>
		/// <param name="type"></param>
		/// <returns></returns>
		bool IsDirectoryType(string type); 
	}
}
