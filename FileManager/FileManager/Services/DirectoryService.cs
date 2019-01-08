using FileManager.IServices;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace FileManager.Services
{
	/// <summary>
	/// Directory Service
	/// </summary>
	public class DirectoryService : IDirectoryService
	{
		#region const
		private const string directory = "directory";
		#endregion
		/// <summary>
		/// Get Directories List
		/// </summary>
		/// <param name="path"></param>
		/// <returns></returns>
		public string[] GetDirectoriesList(string path)
		{
			if (!string.IsNullOrWhiteSpace(path))
			{
				return Directory.GetDirectories(path);
			}
			throw new ArgumentNullException("path");
		}

		/// <summary>
		/// deletes directory
		/// </summary>
		/// <param name="path"></param>
		public void Delete(string path)
		{
			if (string.IsNullOrWhiteSpace(path) || !Directory.Exists(path))
			{
				throw new ArgumentNullException("path");
			}
			Directory.Delete(path, true);
		}

		/// <summary>
		/// Creates directory
		/// </summary>
		/// <param name="path"></param>
		public void Create(string path)
		{
			if (string.IsNullOrWhiteSpace(path) || Directory.Exists(path))
			{
				throw new ArgumentNullException("path");
			}
			Directory.CreateDirectory(path);
		}

		/// <summary>
		/// Is Directory Type
		/// </summary>
		/// <param name="type"></param>
		/// <returns></returns>
		public bool IsDirectoryType(string type)
		{
			if(string.IsNullOrEmpty(type))
			{
				throw new ArgumentNullException("type");
			}
			return type == directory;
		}
	}
}